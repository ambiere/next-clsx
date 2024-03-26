const getPropsClsx = require('./util/prop-clsx')
const getConditionalClsx = require('./util/cond-clsx')

function nextClsx (style, options = {}) {
  return (className, ...classNames) => {
    let i = 0
    const clsx = []
    let classNameArray = className[0].split(' ')

    classNameArray.push(classNames)
    classNameArray = classNameArray.flat().filter((className) => className !== '')

    while (i < classNameArray.length) {
      Object.entries(style[classNameArray[i]]).map(([classNamesKey, classNames]) => {
        const propsClsx = getPropsClsx(options, classNamesKey, classNames)
        const conditionalClsx = getConditionalClsx(options, classNamesKey, classNames)
        if (conditionalClsx.length) {
          return clsx.push(conditionalClsx)
        }
        if (propsClsx.length) {
          return propsClsx.map((classNames) => clsx.push(classNames))
        }
        return clsx.push([classNamesKey, classNames])
      })
      i++
    }
    return clsx
      .filter(([_, className]) => typeof className === 'string')
      .reduce((_classNames, classNames) => _classNames + ` ${classNames[1]}`, '')
      .trim()
  }
}

module.exports = nextClsx
