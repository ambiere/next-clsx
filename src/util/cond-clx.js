function condClx (c, k, val) {
  const aggClx = []
  const _c = Object.entries(c)
  const ok = _c.filter(([_, c]) => typeof c === 'string' && c === val)
  if (ok[0]) {
    aggClx.push([k + 'key', k])
  }
  return aggClx.flat()
}

module.exports = condClx
