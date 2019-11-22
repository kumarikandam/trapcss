# trapcss

%NPM: trapcss%

`trapcss` removes unused selectors from CSS files to achieve maximum optimisation. Can be used as an API function or with CLI.

It is a [fork](https://github.com/leeoniya/dropcss) which is _"An exceptionally fast, thorough and tiny unused-CSS cleaner"_, but has a binary and has been optimised with Closure Compiler.

```sh
yarn add trapcss
npm install -D trapcss
```

## Introduction

TrapCSS takes your HTML and CSS as input and returns only the used CSS as output. Its custom HTML and CSS parsers are highly optimized for the 99% use case and thus avoid the overhead of handling malformed markup or stylesheets, so well-formed input is required. There is minimal handling for complex escaping rules, so there will always exist cases of valid input that cannot be processed by TrapCSS; for these infrequent cases, please [start a discussion](https://github.com/leeoniya/dropcss/issues). While the HTML spec allows `html`, `head`, `body` and `tbody` to be implied/omitted, TrapCSS makes no such assumptions; selectors will only be retained for tags that can be parsed from provided markup.

It's also a good idea to run your CSS through a structural optimizer like [clean-css](https://github.com/jakubpawlowicz/clean-css), [csso](https://github.com/css/csso), [cssnano](https://github.com/cssnano/cssnano) or [crass](https://github.com/mattbasta/crass) to re-group selectors, merge redundant rules, etc. It probably makes sense to do this after TrapCSS, which can leave redundant blocks, e.g. `.foo, .bar { color: red; } .bar { width: 50%; }` -> `.bar { color: red; } .bar { width: 50%; }` if `.foo` is absent from your markup.

More on this project's backstory & discussions: v0.1.0 alpha: [/r/javascript](https://old.reddit.com/r/javascript/comments/b3mcu8/dropcss_010_a_minimal_and_thorough_unused_css/), [Hacker News](https://news.ycombinator.com/item?id=19469080) and v1.0.0 release: [/r/javascript](https://old.reddit.com/r/javascript/comments/bb7im2/dropcss_v100_an_exceptionally_fast_thorough_and/).

<kbd>📙 [READ WIKI PAGES](../../wiki)</kbd>

## Table Of Contents

%TOC%

%~%