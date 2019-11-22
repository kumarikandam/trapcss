import TempContext from 'temp-context'
import makeTestSuite from '@zoroaster/mask'

const wrap = (stdout) => {
  return `<style>
  ${stdout}
</style>`
}

export const stress = makeTestSuite('test/result/bin/stress', {
  fork: 'src/bin',
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
    module: 'src/bin',
    preprocess: {
      stdout: wrap,
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
    module: 'src/bin',
  },
  /**
   * @param {TempContext} t
   */
  async getResults({ read }) {
    const s = await read('style-trap.css')
    return wrap(s)
  },
})