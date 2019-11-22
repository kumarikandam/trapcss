# @lemuria/dropcss

[![npm version](https://badge.fury.io/js/%40lemuria%2Fdropcss.svg)](https://www.npmjs.com/package/@lemuria/dropcss)

`@lemuria/dropcss` is [fork](https://github.com/leeoniya/dropcss) An exceptionally fast, thorough and tiny unused-CSS cleaner.

```sh
yarn add @lemuria/dropcss
npm install -D dropcss
```

## Introduction

DropCSS takes your HTML and CSS as input and returns only the used CSS as output. Its custom HTML and CSS parsers are highly optimized for the 99% use case and thus avoid the overhead of handling malformed markup or stylesheets, so well-formed input is required. There is minimal handling for complex escaping rules, so there will always exist cases of valid input that cannot be processed by DropCSS; for these infrequent cases, please [start a discussion](https://github.com/leeoniya/dropcss/issues). While the HTML spec allows `html`, `head`, `body` and `tbody` to be implied/omitted, DropCSS makes no such assumptions; selectors will only be retained for tags that can be parsed from provided markup.

It's also a good idea to run your CSS through a structural optimizer like [clean-css](https://github.com/jakubpawlowicz/clean-css), [csso](https://github.com/css/csso), [cssnano](https://github.com/cssnano/cssnano) or [crass](https://github.com/mattbasta/crass) to re-group selectors, merge redundant rules, etc. It probably makes sense to do this after DropCSS, which can leave redundant blocks, e.g. `.foo, .bar { color: red; } .bar { width: 50%; }` -> `.bar { color: red; } .bar { width: 50%; }` if `.foo` is absent from your markup.

More on this project's backstory & discussions: v0.1.0 alpha: [/r/javascript](https://old.reddit.com/r/javascript/comments/b3mcu8/dropcss_010_a_minimal_and_thorough_unused_css/), [Hacker News](https://news.ycombinator.com/item?id=19469080) and v1.0.0 release: [/r/javascript](https://old.reddit.com/r/javascript/comments/bb7im2/dropcss_v100_an_exceptionally_fast_thorough_and/).

## Table Of Contents

- [Introduction](#introduction)
- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`dropcss(opts: Config): { css: string, sels: Set }`](#dropcssopts-config--css-string-sels-set-)
  * [`Config`](#type-config)
- [CLI](#cli)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import dropcss from '@lemuria/dropcss'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>dropcss</ins>(</code><sub><br/>&nbsp;&nbsp;`opts: Config,`<br/></sub><code>): <i>{ css: string, sels: Set }</i></code>
The shouldDrop hook is called for every CSS selector that could not be matched in the html. Return false to retain the selector or true to drop it.

 - <kbd><strong>opts*</strong></kbd> <em><code><a href="#type-config" title="Options for the program.">Config</a></code></em>: The options for _DropCSS_.

__<a name="type-config">`Config`</a>__: Options for the program.

|    Name    |       Type       |                Description                 | Default |
| ---------- | ---------------- | ------------------------------------------ | ------- |
| __html*__  | <em>string</em>  | The input HTML.                            | -       |
| __css*__   | <em>string</em>  | The CSS to drop selectors from.            | -       |
| shouldDrop | <em>boolean</em> | Whether _DropCSS_ should remove selectors. | `false` |

```js
/* alanode example/ */
import dropcss from '@lemuria/dropcss'

let html = `
    <html>
        <head></head>
        <body>
            <p>Hello World!</p>
        </body>
    </html>
`

let css = `
    html {
      background: yellow;
      /* @alternate */
      background: green;
    }
    .card {
      padding: 8px;
    }

    p:hover a:first-child {
      color: red;
    }
`

const whitelist = /#foo|\.bar/

let dropped = new Set()

let cleaned = dropcss({
  html,
  css,
  shouldDrop(sel) {
    if (whitelist.test(sel))
      return false
    else {
      dropped.add(sel)
      return true
    }
  },
})

console.log(cleaned.css)

console.error(dropped)
```

```css
html{background: yellow;background: green;}
```
```js
Set { '.card', 'p:hover a:first-child' }
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## CLI

_DropCSS_ can be used from the CLI.

<table>
 <thead>
  <tr>
   <th>Argument</th> 
   <th>Short</th>
   <th>Description</th>
  </tr>
 </thead>
  <tr>
   <td>input</td>
   <td></td>
   <td>The HTML files to read.</td>
  </tr>
  <tr>
   <td>--css</td>
   <td>-c</td>
   <td>The CSS file to drop selectors from.</td>
  </tr>
  <tr>
   <td>--output</td>
   <td>-o</td>
   <td>The destination where to save output.
    If not passed, prints to stdout.</td>
  </tr>
  <tr>
   <td>--help</td>
   <td>-h</td>
   <td>Print the help information and exit.</td>
  </tr>
  <tr>
   <td>--version</td>
   <td>-v</td>
   <td>Show the version's number and exit.</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/3.svg?sanitize=true">
</a></p>

## Copyright

Original work by @leeoniya in [DropCSS](https://github.com/leeoniya/dropcss) (MIT).

(c) [Art Deco™][1] 2019

[1]: www.artd.eco

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>