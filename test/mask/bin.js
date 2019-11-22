import TempContext from 'temp-context'
import Context from '../context'
import makeTestSuite from '@zoroaster/mask'

export const stress = makeTestSuite('test/result/bin/stress', {
  fork: Context.BIN,
})

export default makeTestSuite('test/result/bin/default', {
  context: TempContext,
  fork: {
    /**
     * @param {string[]} args
     * @param {TempContext} t
     */
    async getArgs(_, { write }) {
      const html = await write('index.html', this.input)
      const [, css] = /<style>([\s\S]+?)<\/style>/.exec(this.css)
      const style = await write('style.css', css)
      return [html, '-c', style]
    },
    module: Context.BIN,
    preprocess: {
      stdout: Context.wrap,
    },
  },
})

export const output = makeTestSuite('test/result/bin/output', {
  context: TempContext,
  fork: {
    /**
     * @param {string[]} args
     * @param {TempContext} t
     */
    async getArgs(args, { resolve }) {
      return [...args, '-o', resolve('style-trap.css')]
    },
    module: Context.BIN,
  },
  /**
   * @param {TempContext} t
   */
  async getResults({ read }) {
    const s = await read('style-trap.css')
    return Context.wrap(s)
  },
})