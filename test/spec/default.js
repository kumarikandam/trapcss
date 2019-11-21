import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import dropcss from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof dropcss, 'function')
  },
  async 'calls package without error'() {
    await dropcss()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await dropcss({
      text,
    })
    ok(res, text)
  },
}

export default T