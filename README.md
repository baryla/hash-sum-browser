# Hash Sum (...but for the browser)

This package is the same as the popular [Hash Sum](https://github.com/bevacqua/hash-sum) but works in the browser on the window or self object (in the Web Worker).

## But why?

I needed this package to be available on a CDN and when I import it in a Web Worker, for it it be available on the `self` object as function :)
