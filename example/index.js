/* alanode example/ */
import dropcss from '../src'

(async () => {
  const res = await dropcss({
    text: 'example',
  })
  console.log(res)
})()