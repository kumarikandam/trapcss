/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _trapcss = {}
/**
 * Options for the program.
 * @record
 */
_trapcss.Config
/**
 * The input HTML.
 * @type {string}
 */
_trapcss.Config.prototype.html
/**
 * The CSS to drop selectors from.
 * @type {string}
 */
_trapcss.Config.prototype.css
/**
 * Whether to keep the `@alternate` comment for Closure Stylesheets. Default `false`.
 * @type {boolean|undefined}
 */
_trapcss.Config.prototype.keepAlternate
/**
 * Whether _TrapCSS_ should remove this selector.
 * The `shouldDrop` hook is called for every CSS selector that could not be matched in the html. Return `false` to retain the selector or `true` to drop it.
 * @type {(function(string): boolean)|undefined}
 */
_trapcss.Config.prototype.shouldDrop = function(sel) {}
/**
 * Return Type.
 * @record
 */
_trapcss.Return
/**
 * The dropped CSS.
 * @type {string}
 */
_trapcss.Return.prototype.css
/**
 * The used selectors.
 * @type {!Set<string>}
 */
_trapcss.Return.prototype.sels
