import ServiceContext from 'zoroaster'
import Context from '../context'
import dropcss from '../../src'

/** @type {Object.<string, (c: Context, z: ServiceContext)>} */
const T = {
  context: [Context, ServiceContext],
  'bench stress test'({ bootstrap, readFile, fixture }, { snapshotExtension }) {
    snapshotExtension('css')
    const bt = readFile(bootstrap)
    const bulma = readFile(fixture`bulma.min.css`)
    const css = bt + bulma
    const res = dropcss({
      css,
      html: readFile(fixture`surveillance.html`),
    })
    return res.css
  },
}

export default T