TrapCSS supports all CSS selectors.

- Supported selectors

  | Common                                                                                                                                            | Attribute                                                                                    | Positional                                                                                | Positional (of-type)                                                                                | Other    |
  |---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|----------|
  | `*` - universal<br>`<tag>` - tag<br>`#` - id<br>`.` - class<br><code>&nbsp;</code> - descendant<br>`>` - child<br>`+` - adjacent sibling<br>`~` - general sibling | `[attr]`<br>`[attr=val]`<br>`[attr*=val]`<br>`[attr^=val]`<br>`[attr$=val]`<br>`[attr~=val]` | `:first-child`<br>`:last-child`<br>`:only-child`<br>`:nth-child()`<br>`:nth-last-child()` | `:first-of-type`<br>`:last-of-type`<br>`:only-of-type`<br>`:nth-of-type()`<br>`:nth-last-of-type()` | `:not()` |

- Retention of all transient pseudo-class and pseudo-element selectors which cannot be deterministically checked from the parsed HTML.
- Removal of unused `@font-face` and `@keyframes` blocks.
- Removal of unused [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
- Deep resolution of composite CSS variables, e.g:

%EXAMPLE: example/features.css%