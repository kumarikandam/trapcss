TrapCSS does not work well with unusual selectors, like the ones used by the popular [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) framework:

`class` attributes can look like this:

%EXAMPLE: example/escaped/index.html%

...and the CSS looks like this:

%EXAMPLE: example/escaped/style.css%

Ouch.

The solution is to temporarily replace the escaped characters in the HTML and CSS with some unique strings which match `/[\w-]/`. This allows TrapCSS's tokenizer to consider the classname as one contiguous thing. After processing, we simply reverse the operation.

%EXAMPLE: example/escaped, ../src => trapcss%

This performant work-around allows _TrapCSS_ to process Tailwind without issues \o/ and is easily adaptable to support other "interesting" cases. One thing to keep in mind is that `shouldDrop()` will be called with selectors containing the temp replacements rather than original selectors, so make sure to account for this if `shouldDrop()` is used to test against some whitelist.

<fork lang="css">
  example/escaped
</fork>
<!-- %FORK example% -->