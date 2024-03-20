function getCondClsx (options, classNameKey, className) {
  const aggregatedClsx = []
  const _options = Object.entries(options)
  const ok = _options.filter(([_, option]) => (typeof option === 'string' || typeof option === 'boolean') && option === className)

  if (ok[0]) {
    aggregatedClsx.push([classNameKey + 'key', classNameKey])
  }
  return aggregatedClsx.flat()
}

module.exports = getCondClsx
