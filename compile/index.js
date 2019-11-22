const { _dropcss } = require('./dropcss')

/**
 * The shouldDrop hook is called for every CSS selector that could not be matched in the html. Return false to retain the selector or true to drop it.
 * @param {_dropcss.Config} opts Options for the program.
 * @param {string} opts.html The input HTML.
 * @param {string} opts.css The CSS to drop selectors from.
 * @param {(sel: string) => boolean} [opts.shouldDrop] Whether _DropCSS_ should remove this selector.
 * @return {_dropcss.Return}
 */
function dropcss(opts) {
  return _dropcss(opts)
}

module.exports = dropcss

/* typal types/index.xml namespace */
/**
 * @typedef {_dropcss.Config} Config `＠record` Options for the program.
 * @typedef {Object} _dropcss.Config `＠record` Options for the program.
 * @prop {string} html The input HTML.
 * @prop {string} css The CSS to drop selectors from.
 * @prop {(sel: string) => boolean} [shouldDrop] Whether _DropCSS_ should remove this selector.
 * @typedef {_dropcss.Return} Return `＠record` Return Type.
 * @typedef {Object} _dropcss.Return `＠record` Return Type.
 * @prop {string} css The dropped CSS.
 * @prop {!Set<string>} sels The used selectors.
 */
