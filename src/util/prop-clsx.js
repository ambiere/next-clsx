function getPropsClsx (options, classNameKey, propKeys) {
  const aggregatedClsx = []
  const _options = Object.entries(options)
  const ok = _options.filter(([optionKey]) => optionKey === classNameKey)

  if (ok[0]) {
    const propValues = Object.values(options.props)
    propValues.map((propValue) => {
      const match = propKeys.filter((propKey) => options.props[propKey] === propValue)
      if (match[0]) return aggregatedClsx.push([propValue + 'key', propValue])
      return -1
    })
  }

  return aggregatedClsx
}

module.exports = getPropsClsx
