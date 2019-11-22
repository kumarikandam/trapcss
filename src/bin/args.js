import argufy from 'argufy'

export const argsConfig = {
  'input': {
    description: 'The HTML files to read.',
    command: true,
    multiple: true,
  },
  'css': {
    description: 'The CSS file to drop selectors from.',
    short: 'c',
  },
  'output': {
    description: 'The destination where to save output.\nIf not passed, prints to stdout.',
    short: 'o',
  },
  'help': {
    description: 'Print the help information and exit.',
    boolean: true,
    short: 'h',
  },
  'version': {
    description: 'Show the version\'s number and exit.',
    boolean: true,
    short: 'v',
  },
}
const args = argufy(argsConfig)

/**
 * The HTML files to read.
 */
export const _input = /** @type {(!Array<string>|string)} */ (args['input'])

/**
 * The CSS file to drop selectors from.
 */
export const _css = /** @type {string} */ (args['css'])

/**
 * The destination where to save output.
    If not passed, prints to stdout.
 */
export const _output = /** @type {string} */ (args['output'])

/**
 * Print the help information and exit.
 */
export const _help = /** @type {boolean} */ (args['help'])

/**
 * Show the version's number and exit.
 */
export const _version = /** @type {boolean} */ (args['version'])

/**
 * The additional arguments passed to the program.
 */
export const _argv = /** @type {!Array<string>} */ (args._argv)