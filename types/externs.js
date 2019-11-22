/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _dropcss = {}
/**
 * Options for the program.
 * @record
 */
_dropcss.Config
/**
 * The input HTML.
 * @type {string}
 */
_dropcss.Config.prototype.html
/**
 * The CSS to drop selectors from.
 * @type {string}
 */
_dropcss.Config.prototype.css
/**
 * Whether _DropCSS_ should remove this selector.
 * @type {(function(string): boolean)|undefined}
 */
_dropcss.Config.prototype.shouldDrop = function(sel) {}
/**
 * Return Type.
 * @record
 */
_dropcss.Return
/**
 * The dropped CSS.
 * @type {string}
 */
_dropcss.Return.prototype.css
/**
 * The used selectors.
 * @type {!Set<string>}
 */
_dropcss.Return.prototype.sels
