# @lemuria/dropcss

[![npm version](https://badge.fury.io/js/@lemuria/dropcss.svg)](https://npmjs.org/package/@lemuria/dropcss)

`@lemuria/dropcss` is [fork] An exceptionally fast, thorough and tiny unused-CSS cleaner.

```sh
yarn add @lemuria/dropcss
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`dropcss(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@lemuria/dropcss.Config`](#type-_@lemuria/dropcssconfig)
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

## <code><ins>dropcss</ins>(</code><sub><br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/></sub><code>): <i>void</i></code>

Call this function to get the result you want.

<strong><a name="type-_@lemuria/dropcssconfig">`_@lemuria/dropcss.Config`</a></strong>: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import dropcss from '@lemuria/dropcss'

(async () => {
  const res = await dropcss({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright

(c) [Art Deco™][1] 2019

[1]: www.artd.eco

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>