const getPropClasses = require('./util/prop-classes')
const getConditionalClasses = require('./util/conditional-classes')

function vitize (style, condition = {}) {
  return (key, ...args) => {
    let i = 0
    const classes = []
    let _key = key.split(' ')

    _key.push(args)
    _key = _key.flat().filter((val) => val !== '')

    while (i < _key.length) {
      Object.entries(style[_key[i]]).map(([key, val]) => {
        const conditionalClasses = getConditionalClasses(condition, key, val)
        const propclasses = getPropClasses(condition, key, val)
        if (conditionalClasses.length) {
          return classes.push(conditionalClasses)
        }
        if (propclasses.length) {
          return propclasses.map((c) => classes.push(c))
        }
        return classes.push([key, val])
      })
      i++
    }

    return classes
      .filter(([_, str]) => typeof str === 'string')
      .reduce((str, cls) => str + ` ${cls[1]}`, '')
      .trim()
  }
}

module.exports = vitize
module.exports.vitize = vitize
