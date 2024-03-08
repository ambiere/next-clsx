const propClx = require('./util/prop-clx')
const condClx = require('./util/cond-clx')

function clx (s, c = {}) {
  return (k, ...a) => {
    let i = 0
    const clx = []
    let _k = k[0].split(' ')

    _k.push(a)
    _k = _k.flat().filter((val) => val !== '')

    while (i < _k.length) {
      Object.entries(s[_k[i]]).map(([k, val]) => {
        const _clx = condClx(c, k, val)
        const _clx_ = propClx(c, k, val)
        if (_clx.length) {
          return clx.push(_clx)
        }
        if (_clx_.length) {
          return _clx_.map((c) => clx.push(c))
        }
        return clx.push([k, val])
      })
      i++
    }

    return clx
      .filter(([_, str]) => typeof str === 'string')
      .reduce((str, cls) => str + ` ${cls[1]}`, '')
      .trim()
  }
}

module.exports = clx
