
# yieldly

  Turn the function into a thunk if the last argument isn't a function
  and we're working in an environment that supports generators.

## Installation

Node:

```bash
$ npm install yieldly
```

Duo (browser):

```js
require('matthewmueller/yieldly');
```

## Example

```js
Model.prototype.save = yieldly(function(obj, fn) {
  // ...
});

// save on the server
yield Model.save(obj);

// in the browser
yield Model.save(obj, fn);
```

## API

### yieldly(fn)

  Wrap a function with `yieldly`. Turns the function into a thunk
  that you can use in co, when the final argument passed is not
  a callback function.

## License

(The MIT License)

Copyright (c) 2014 Matthew Mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.