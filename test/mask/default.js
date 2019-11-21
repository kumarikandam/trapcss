import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import dropcss from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await dropcss({
      text: this.input,
    })
    return res
  },
  context: Context,
})