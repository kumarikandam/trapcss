import { join } from 'path'
import { readFileSync } from 'fs'

/**
 * A testing context for the package.
 */
export default class Context {
  // async _init() {
  //   LOG('init context')
  // }
  /**
   * Example method.
   */
  example() {
    return 'OK'
  }
  /**
   * A tagged template that returns the relative path to the fixture.
   * @param {string} file
   * @example
   * fixture`input.txt` // -> test/fixture/input.txt
   */
  fixture(file) {
    const f = file.raw[0]
    return join('test/fixture', f)
  }
  /**
   * Path to bootstrap.
   */
  get bootstrap() {
    return this.fixture`bootstrap.min.css`
  }
  /**
   * Read the file from the fs.
   * @param {string} path The path to read.
   */
  readFile(path) {
    return readFileSync(path, 'utf8')
  }
  static get BIN() {
    return BIN
  }
  /**
   * Wrap the style in a style tag.
   */
  static get wrap() {
    return wrap
  }
  // async _destroy() {
  //   LOG('destroy context')
  // }
}

let BIN
if (process.env.ALAMODE_ENV == 'test-build') {
  console.log('Testing build bin')
  BIN = 'build/bin/dropcss'
} if (process.env.ALAMODE_ENV == 'test-compile') {
  console.log('Testing compile bin')
  BIN = 'compile/bin/dropcss'
} else {
  BIN = 'src/bin'
}

/**
 * @param {string} stdout
 */
const wrap = (stdout) => {
  return `<style>
  ${stdout}
</style>`
}