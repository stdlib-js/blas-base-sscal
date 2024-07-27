<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sscal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiply a single-precision floating-point vector `x` by a constant `alpha`.



<section class="usage">

## Usage

To use in Observable,

```javascript
sscal = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sscal@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-base-sscal/tags). For example,

```javascript
sscal = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sscal@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var sscal = require( 'path/to/vendor/umd/blas-base-sscal/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sscal@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.sscal;
})();
</script>
```

#### sscal( N, alpha, x, stride )

Multiplies a single-precision floating-point vector `x` by a constant `alpha`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sscal( x.length, 5.0, x, 1 );
// x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to multiply every other value by a constant

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sscal( 4, 5.0, x, 2 );
// x => <Float32Array>[ -10.0, 1.0, 15.0, -5.0, 20.0, 0.0, -5.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial array:
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scale every other value:
sscal( 3, 5.0, x1, 2 );
// x0 => <Float32Array>[ 1.0, -10.0, 3.0, -20.0, 5.0, -30.0 ]
```

If either `N` or `stride` is less than or equal to `0`, the function returns `x` unchanged.

#### sscal.ndarray( N, alpha, x, stride, offset )

Multiplies a single-precision floating-point vector `x` by a constant `alpha` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sscal.ndarray( x.length, 5.0, x, 1, 0 );
// x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the `offset` parameter supports indexing semantics based on a starting index. For example, to multiply the last three elements of `x` by a constant

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

sscal.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => <Float32Array>[ 1.0, -2.0, 3.0, -20.0, 25.0, -30.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   `sscal()` corresponds to the [BLAS][blas] level 1 function [`sscal`][sscal].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sscal@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

sscal( x.length, 5.0, x, 1 );
console.log( x );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-base/daxpy`][@stdlib/blas/base/daxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector x by a constant and add the result to y.</span>
-   <span class="package-name">[`@stdlib/blas-base/dscal`][@stdlib/blas/base/dscal]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point vector by a constant.</span>
-   <span class="package-name">[`@stdlib/blas-base/gscal`][@stdlib/blas/base/gscal]</span><span class="delimiter">: </span><span class="description">multiply a vector by a constant.</span>
-   <span class="package-name">[`@stdlib/blas-base/saxpy`][@stdlib/blas/base/saxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector x by a constant and add the result to y.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-sscal.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-sscal

[test-image]: https://github.com/stdlib-js/blas-base-sscal/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/blas-base-sscal/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-sscal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-sscal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-sscal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-sscal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-sscal/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-sscal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-sscal/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-sscal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-sscal/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-sscal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-sscal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-sscal/main/LICENSE

[blas]: http://www.netlib.org/blas

[sscal]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas-base-daxpy/tree/umd

[@stdlib/blas/base/dscal]: https://github.com/stdlib-js/blas-base-dscal/tree/umd

[@stdlib/blas/base/gscal]: https://github.com/stdlib-js/blas-base-gscal/tree/umd

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas-base-saxpy/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
