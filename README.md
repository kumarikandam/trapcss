# trapcss

[![npm version](https://badge.fury.io/js/trapcss.svg)](https://www.npmjs.com/package/trapcss)

`trapcss` is [fork](https://github.com/leeoniya/dropcss) An exceptionally fast, thorough and tiny unused-CSS cleaner.

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

- [Introduction](#introduction)
- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`trapcss(opts: Config): Return`](#trapcssopts-config-return)
  * [`Config`](#type-config)
  * [`Return`](#type-return)
- [CLI](#cli)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import trapcss from 'trapcss'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>trapcss</ins>(</code><sub><br/>&nbsp;&nbsp;`opts: Config,`<br/></sub><code>): <i>Return</i></code>
Parses the supplied HTML and CSS and removes unused selectors. Also removes empty CSS rules.

 - <kbd><strong>opts*</strong></kbd> <em><code><a href="#type-config" title="Options for the program.">Config</a></code></em>: The options for _TrapCSS_.

__<a name="type-config">`Config`</a>__: Options for the program.

|    Name    |               Type                |                                                                                                 Description                                                                                                  |
| ---------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __html*__  | <em>string</em>                   | The input HTML.                                                                                                                                                                                              |
| __css*__   | <em>string</em>                   | The CSS to drop selectors from.                                                                                                                                                                              |
| shouldDrop | <em>(sel: string) => boolean</em> | Whether _TrapCSS_ should remove this selector.<br/>The `shouldDrop` hook is called for every CSS selector that could not be matched in the html. Return `false` to retain the selector or `true` to drop it. |

__<a name="type-return">`Return`</a>__: Return Type.

|   Name    |            Type             |     Description     |
| --------- | --------------------------- | ------------------- |
| __css*__  | <em>string</em>             | The dropped CSS.    |
| __sels*__ | <em>!Set&lt;string&gt;</em> | The used selectors. |

```js
/* alanode example/ */
import trapcss from 'trapcss'

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

let cleaned = trapcss({
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

_TrapCSS_ can be used from the CLI.

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

For example, having these two files, we can use `trapcss` from the command line:

<table>
<tr>
  <th>HTML file</th>
  <th>CSS file</th>
</tr>
<tr>
  <td>

  ```html
  <html>
    <head>
      <title>TrapCSS ftw</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
  </html>
  ```
  </td>
  <td>

  ```css
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
  ```
  </td>
</tr>
</table>

```console
trapcss:~$ trapcss example/cli/index.html -c example/cli/style.css
```

```css
html{background: yellow;background: green;}
```

The help can be accessed with the `-h` command:

```
Remove unused CSS

  trapcss input.html[,n.html,...] -c style.css [-o output] [-hv]

	input        	The HTML files to read.
	--css, -c    	The CSS file to drop selectors from.
	--output, -o 	The destination where to save output.
	             	If not passed, prints to stdout.
	--help, -h   	Print the help information and exit.
	--version, -v	Show the version's number and exit.

  Example:

    trapcss index.html example.html -c style.css -o style-dropped.css
```

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